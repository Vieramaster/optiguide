import { Catalog } from "@/features/tools/catalog";
import { getCatalogSnapshots } from "@/features/tools/catalog/server";

const CatalogPage = async () => {
  const snapshots = await getCatalogSnapshots();

  return (
    <Catalog snapshots={snapshots} />
  );
};

export default CatalogPage;
