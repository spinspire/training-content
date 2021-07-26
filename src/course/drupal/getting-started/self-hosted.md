---
title: Environment Setup
author: Christian Crawford
category: start
references:
  "Drupal.org - Installation Drupal": "https://www.drupal.org/docs/installing-drupal"
  "Drupal.org - Create a database": "https://www.drupal.org/docs/installing-drupal/step-3-create-a-database#create-a-database-using-mysqlmariadb-commands"
  "Composer Installation": "https://getcomposer.org/download"
weight: -8
---

## Introduction
Before you can host a Drupal site there are several prerequisites that you'll need. The collection of these softwares is refereed to as a LAMP (Linux, Apache, MySQL, PHP) stack. It's assumed that you will be hosting this on a Linux machine and that you have root access on the box.

## Prerequisites
As discussed in the introduction section, you will need to have one of each of the following softwares installed:
1. Web server (Nginx, Apache, IIS, etc)
2. Database (MySQL/MariaDB, PostgresSQL)
3. PHP (>= 7.3)

### Web server

##### Nginx
<details>
<summary>Click to expand</summary>

```bash
server {
    server_name example.com;
    root /var/www/drupal8/web; ## <-- Your only path reference.

    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }

    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }

    # Very rarely should these ever be accessed outside of your lan
    location ~* \.(txt|log)$ {
        allow 192.168.0.0/16;
        deny all;
    }

    location ~ \..*/.*\.php$ {
        return 403;
    }

    location ~ ^/sites/.*/private/ {
        return 403;
    }

    # Block access to scripts in site files directory
    location ~ ^/sites/[^/]+/files/.*\.php$ {
        deny all;
    }

    # Allow "Well-Known URIs" as per RFC 5785
    location ~* ^/.well-known/ {
        allow all;
    }

    # Block access to "hidden" files and directories whose names begin with a
    # period. This includes directories used by version control systems such
    # as Subversion or Git to store control files.
    location ~ (^|/)\. {
        return 403;
    }

    location / {
        # try_files $uri @rewrite; # For Drupal <= 6
        try_files $uri /index.php?$query_string; # For Drupal >= 7
    }

    location @rewrite {
        #rewrite ^/(.*)$ /index.php?q=$1; # For Drupal <= 6
        rewrite ^ /index.php; # For Drupal >= 7
    }

    # Don't allow direct access to PHP files in the vendor directory.
    location ~ /vendor/.*\.php$ {
        deny all;
        return 404;
    }

    # Protect files and directories from prying eyes.
    location ~* \.(engine|inc|install|make|module|profile|po|sh|.*sql|theme|twig|tpl(\.php)?|xtmpl|yml)(~|\.sw[op]|\.bak|\.orig|\.save)?$|/(\.(?!well-known).*)|Entries.*|Repository|Root|Tag|Template|composer\.(json|lock)|web\.config$|/#.*#$|\.php(~|\.sw[op]|\.bak|\.orig|\.save)$ {
        deny all;
        return 404;
    }

    # In Drupal 8, we must also match new paths where the '.php' appears in
    # the middle, such as update.php/selection. The rule we use is strict,
    # and only allows this pattern with the update.php front controller.
    # This allows legacy path aliases in the form of
    # blog/index.php/legacy-path to continue to route to Drupal nodes. If
    # you do not have any paths like that, then you might prefer to use a
    # laxer rule, such as:
    #   location ~ \.php(/|$) {
    # The laxer rule will continue to work if Drupal uses this new URL
    # pattern with front controllers other than update.php in a future
    # release.
    location ~ '\.php$|^/update.php' {
        fastcgi_split_path_info ^(.+?\.php)(|/.*)$;
        # Ensure the php file exists. Mitigates CVE-2019-11043
        try_files $fastcgi_script_name =404;
        # Security note: If you're running a version of PHP older than the
        # latest 5.3, you should have "cgi.fix_pathinfo = 0;" in php.ini.
        # See http://serverfault.com/q/627903/94922 for details.
        include fastcgi_params;
        # Block httpoxy attacks. See https://httpoxy.org/.
        fastcgi_param HTTP_PROXY "";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param QUERY_STRING $query_string;
        fastcgi_intercept_errors on;
        # PHP 5 socket location.
        #fastcgi_pass unix:/var/run/php5-fpm.sock;
        # PHP 7 socket location.
        fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        try_files $uri @rewrite;
        expires max;
        log_not_found off;
    }

    # Fighting with Styles? This little gem is amazing.
    # location ~ ^/sites/.*/files/imagecache/ { # For Drupal <= 6
    location ~ ^/sites/.*/files/styles/ { # For Drupal >= 7
        try_files $uri @rewrite;
    }

    # Handle private files through Drupal. Private file's path can come
    # with a language prefix.
    location ~ ^(/[a-z\-]+)?/system/files/ { # For Drupal >= 7
        try_files $uri /index.php?$query_string;
    }

    # Enforce clean URLs
    # Removes index.php from urls like www.example.com/index.php/my-page --> www.example.com/my-page
    # Could be done with 301 for permanent or other redirect codes.
    if ($request_uri ~* "^(.*/)index\.php/(.*)") {
        return 307 $1$2;
    }
}
```
</details>
<br>

##### Apache
<details>
  <summary>Click to expand</summary>

  ```bash
  <VirtualHost *:443>
    ServerName example.com
    DocumentRoot /var/www/html/web

    SSLEngine on
    SSLCertificateFile /etc/apache2/certs/mysite_cert.pem
    SSLCertificateKeyFile /etc/apache2/certs/mysite_key.pem

    <Files ~ "\.(cgi|shtml|phtml|php3?)$">
      SSLOptions +StdEnvVars
    </Files>

    ErrorLog /var/log/httpd/logs/ssl_error.log

    <Directory /var/www/html/web>
      Options FollowSymlinks Indexes
      AllowOverride All
      DirectoryIndex index.php
      Require all granted
      RewriteEngine On
      RewriteBase /
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]
    </Directory>

    <LocationMatch "^/(.*\.php(/.*)?)$">
      ProxyPass "fcgi://127.0.0.1:9000/var/www/html/web/"
    </LocationMatch>
  </VirtualHost>
  ```
</details>
<br>

### Database
You will need to create a new database for the Drupal site. You also need to create a new mysql user to restrict access.
```sql
CREATE DATABASE databasename;
CREATE USER username@localhost IDENTIFIED BY 'password';
GRANT ALL ON databasename.* TO 'username'@'localhost' IDENTIFIED BY 'password';
```
<br>

### PHP
Besides the base php package, you will need a handful of php extentions.
- php-gd
- php-mysql
- php-pdo 
- php-opcache
- php-xml 
- php-mbstring
- php-curl
- php-bz2 
- php-zip
## Composer
Once you've installed and configured your stack, you'll next need to download and install [Composer](https://getcomposer.org). Composer is the chosen PHP package manager for Drupal projects. In order to install the latest version of Composer you can run the following commands in your terminal shell.

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Assuming that you received no errors, you should next move the `composer.phar` file into your PATH and verify that you can use it.
```bash
sudo mv composer.phar /usr/local/bin/composer
composer --version
```
You should see something like "Composer version 2.1.3 2021-06-09 16:31:20" following the composer version check.

## Downloading Drupal
```bash
composer create-project drupal/recommended-project my-site-name
```
This will download the latest version of Drupal (9.2.2 at the time of writing) and place it into the specified directory.
```bash
cd my-site-name
# Skip installing packages listed in require-dev
composer install --no-dev
# Highly recommended, but not strictly required.
composer require drush/drush
```
Running the ```composer install``` command downloads all dependencies that the project has specified in the composer.json file.
<br>Requiring the ```drush/drush``` package will install the Drupal command line tool which will be used extensively in later lessons.

## Installing Drupal
At this point you should have your web server running, a database created, and PHP installed and configured. Assuming that is the case, navigate to the domain you've registered for the site.
You should automatically be redirected to the installation wizard.