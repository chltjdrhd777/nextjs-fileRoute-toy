import { useRouter } from "next/router";
function ClientPage() {
  const router = useRouter();

  function onHandleProject() {
    //load data;
    router.replace("/clients/max/project1");
  }
  return (
    <div>
      the clinet page
      <button onClick={onHandleProject}>Load project A</button>
    </div>
  );
}

export default ClientPage;
