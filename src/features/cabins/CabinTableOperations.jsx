import Filter from "../../UI/Filter";
import SortBy from "../../UI/SortBy";
import TableOperations from "../../UI/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A - Z)" },
          { value: "name-desc", label: "Sort By Name (Z - A)" },
          { value: "regular_price-asc", label: "Sort By Price (Min - Max)" },
          { value: "regular_price-desc", label: "Sort By Price (Max - Min)" },
          { value: "max_capacity-asc", label: "Sort By Capacity (Min - Max)" },
          { value: "max_capacity-desc", label: "Sort By Capacity (Max - Min)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
