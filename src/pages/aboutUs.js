import Information from "@/components/modules/information/information";
import CooperationNetwork from "@/components/templates/aboutUs/CooperationNetwork/CooperationNetwork";
import History from "@/components/templates/aboutUs/History/History";
import OurServices from "@/components/templates/aboutUs/OurServices/OurServices";

export default function aboutUs({ data }) {
  return (
    <>
      {/* تاریخچه */}
      <History />
      {/* شبکه همکاری فروش املاک */}
      <CooperationNetwork />
      {/* خدمات ما */}
      <OurServices OurServices={data.OurServices} />
      {/* راه های ارتباطی */}
      <Information data={data.aboutUs} />
    </>
  );
}
export async function getStaticProps() {
  const OurServicesResponse = await fetch("http://localhost:4001/OurServices");
  const OurServicesData = await OurServicesResponse.json();

  const aboutUsResponse = await fetch("http://localhost:4001/aboutUs");
  const aboutUsData = await aboutUsResponse.json();

  return {
    props: {
      data: {
        OurServices: OurServicesData,
        aboutUs: aboutUsData,
      },
    },
  };
}
