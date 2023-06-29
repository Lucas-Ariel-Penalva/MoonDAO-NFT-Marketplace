import ArrowButton from "../../Layout/ArrowButton";
import CollectionThumbnail from "./CollectionThumbnail";
import SectionHeader from "../../Layout/SectionHeader";

export default function CollectionShowcase({ collections, validListings, validAuctions }) {
  return (
    <div className="mt-10 md:mt-12 lg:mt-32 2xl:mt-48 m flex flex-col items-center w-full">
      <SectionHeader title="Popular collections" />
      <div
        className={`${
          collections && collections.length > 2 && "xl:grid-cols-3"
        } mt-10 md:mt-16 flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-flow-row md:gap-12 xl:gap-14 items-center`}
      >
        {collections &&
          collections.map((collection, index) => (
            <CollectionThumbnail key={"collection-thumbnail-" + index} collection={collection} validListings={validListings} validAuctions={validAuctions} />
          ))}
      </div>
      <ArrowButton text={"See all"} position={"mt-16"} link={"/buy?filterType=trending&assetType=collection"} />
    </div>
  );
}
