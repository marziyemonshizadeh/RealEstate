import Estate from "@/components/modules/estate/estate";
import PaginationButton from "@/components/templates/home/index/PaginationButton";
import EstateNotFound from "@/components/templates/home/index/estateNotFound";
import SearchBox from "@/components/templates/home/index/searchBox";
import { useEffect, useState } from "react";

function home({ data }) {
  // copy estates
  const [homes, setHomes] = useState(data.estatesData);

  const [sort, setSort] = useState("-1");
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const pageItem = 3;

  // search data
  useEffect(() => {
    const newHomes = data.estatesData.filter((home) =>
      home.title.includes(search)
    );
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        // do not work
        setHomes([...homes]);
      }
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();
    setActivePage(page);
    // paginated
    const endIndex = pageItem * page;
    const startIndex = endIndex - pageItem;

    const paginatedHomes = data.estatesData.slice(startIndex, endIndex);
    setHomes(paginatedHomes);
  };
  return (
    <>
      <SearchBox
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />
      {data.estatesData.length > 0 && homes.length > 0 ? (
        <>
          {/* املاک */}
          <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
            {homes.slice(0, pageItem).map((estate) => {
              return <Estate key={estate.id} {...estate} />;
            })}
          </section>
          {/* pagination */}
          <PaginationButton
            estate={data.estatesData}
            pageItem={pageItem}
            activePage={activePage}
            paginateHandler={paginateHandler}
          />
        </>
      ) : (
        <EstateNotFound />
      )}
    </>
  );
}
export async function getStaticProps() {
  const estatesResponse = await fetch("http://localhost:4001/Estates/");
  const estatesData = await estatesResponse.json();

  return {
    props: {
      data: {
        estatesData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
export default home;
