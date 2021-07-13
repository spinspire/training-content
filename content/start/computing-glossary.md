---
title: "Background: Basic computing glossary"
author: Jitesh Doshi
category: start
weight: 10
---

You need to be familiar with the following terms in order to have a strong foundation on which to build your web development knowledge. Some of these terms are rather basic, so you might already be familiar with them. But it might be a good idea to skim through them at least.

- Program: a disk file containing programming instructions. Example: cmd.exe or /usr/bin/bash
- Process: a live, running instance of the above program.
- Memory: volatile, random-access, solid state memory that the microprocessor accesses (mostly) directly.
- Storage: permanent storage for bulk data, such as hard-disk drive (HDD), or solid-state drive (SSD).
- File: A unit of storage on a disk. It has a name, a location, content bytes, and a set of access permissions for users of the computer it is on. Example: profile.jpg.
- Directory: A path within a file-system where a file can be located. Example: /web/images.
- Stream: A live sequence of bytes representing data that is being generated while the reader is reading it.
- Bit: Binary-digit.
- Byte: 8 bits.
- IP address: 4-byte network address of a computer on the network (e.g. 192.168.3.254)
- DNS (Domain Name System): Gives easy to remember "host names" to hard-to-remember, numeric host IP addresses. Host here is the same as a computer.
- Localhost: A host name that ANY computer can call itself by. The IP address for localhost is 127.0.0.1, which is also called "loopback" address and always points to the computer itself, which is the client as well as the server.
- (Networking) Port: A number from 1 to 65,535 (216-1) that indicates one of many network communication endpoints within a single IP address. For example, the standard port for HTTP servers to listen on is port 80.
- IP (Internet Protocol) the most widely used network protocol.
- stdin, stdout, stderr: The standard input, standard output, and standard error streams for any process. Every running process automatically gets these three streams.
  - stdin to read data from (the keyboard)
  - stdout to write data to (the terminal)
  - stderr also to write log messages and errors to (the terminal)
- Programming language: A set of rules of syntax and semantics to allow humans to give very precise instructions to a computer. Examples: JavaScript, C, C++, Python, Ruby, PHP, C#, Go, Rust, Java, Kotlin, Swift, etc.
- Scripting language: Many programming languages are compiled from text to binary instructions. Scripting languages are not. They are written as text, and remain in text form, without compilation, and are read and executed directly by an interpreter. Example: Python, PHP, JavaScript, etc.
- Procedure/subroutine: A reusable unit of programming instructions that takes a set of parameters and performs a specific task.
- Function: Just like a procedure/subroutine, but returns a value computed from input parameters and the possible other state of the program.
- Pure function: A function that has no side effects other than returning a value computed from input parameters. The return value is always the same for the same set of parameters and is not affected by anything other than the parameters. TODO: provide an example.
- Operating System (OS): A very complex program that is the first to run when a computer boots, and then starts various other programs that make the computer usable. It provides basic services to all programs so that they can make use of the computer's resources.
- Terminal: A program that allows users to run text-mode programs in, provides text input to them (from the user's keyboard), and reads text output from them (to the user's screen).
- Kernel: The heart of the OS. It is very complex, and thus not very user-friendly. But it performs most critical tasks for the OS.
- Shell: A program that mediates between the OS kernel and the user to make it easier for the user to use the computer, the OS kernel, and other programs.
- Shell Scripting: The scripting language of the shell - it allows stringing together several programs to perform complex automation.
- Database: A special program that allows fast and convenient storage and retrieval of structured data, often organized as tables, rows, and columns.
- Synchronous vs. Asynchronous: A synchronous request is one in which the caller makes a request and then waits for the request to finish and produce results before moving on to the next step. 