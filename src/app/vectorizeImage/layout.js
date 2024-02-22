export default function vectorizeBearLayout({
  children,
  upload,
  vectorize,
  download,
}) {
  let isUploaded = false;
  return (
    <section>
      {/* {children} */}
      {isUploaded && upload}
      {/* {!isUploaded && vectorize} */}
      {download}
    </section>
  );
}
