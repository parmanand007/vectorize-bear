export default function vectorizeBearLayout({ children, upload, vectorize }) {
  let isUploaded = true;
  return (
    <section>
      {/* {children} */}
      {isUploaded && upload}
      {!isUploaded && vectorize}
    </section>
  );
}
