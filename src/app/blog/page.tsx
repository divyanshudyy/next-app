export default async function Blogs() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional Delay");
    }, 2000);
  });
  return <h1>Blogs Page</h1>;
}
