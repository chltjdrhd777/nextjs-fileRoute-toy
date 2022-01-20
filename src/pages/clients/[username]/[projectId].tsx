import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query, router.pathname);

  return (
    <div>
      <h1>selectedpage</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
