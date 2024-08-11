import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";

import Heading from "../UI/Heading";
import Row from "../UI/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>FILTER / SORT</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
