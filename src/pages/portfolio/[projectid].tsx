import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // 이것은 /portfolio/[projectid]
  console.log(router.route); // 이것은 {projectid:"1"}
  return <div>dynamic route</div>;
}

export default PortfolioProjectPage;
