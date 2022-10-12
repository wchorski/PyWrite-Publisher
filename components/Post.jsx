export function Post({ postData }) {
  return (
    <>
      <h1>{postData?.slug}</h1>
      <br />
      <small>{postData?.title}</small> | <small>{postData?.date}</small>

      <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
    </>
  );
}
