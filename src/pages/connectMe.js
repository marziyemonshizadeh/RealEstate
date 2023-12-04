import ConnectMe from "@/components/templates/conectMe/connectMe";

export default function conectMe({ data }) {
  return (
    <>
      <ConnectMe aboutUs={data.aboutUs} />
    </>
  );
}
export async function getStaticProps() {
  const aboutUsResponse = await fetch("http://localhost:4001/aboutUs");
  const aboutUsData = await aboutUsResponse.json();

  return {
    props: {
      data: {
        aboutUs: aboutUsData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
