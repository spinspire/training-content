module.exports = async function () {
  return {
    eleventyComputed: {
      // data.article is not always present, so use ?.
      title: (data) => data?.article?.attributes?.title,
    },
  };
}