export default function vectorizeBearLayout({ children, upload, vectorize }) {
  let isUploaded = false;
  return (
    <section>
      {/* {children} */}
      {isUploaded && upload}
      {!isUploaded && vectorize}
    </section>
  );
}
