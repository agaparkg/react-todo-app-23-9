import { Button } from "reactstrap";

function Footer({ handleDeleteAllButton }) {
  return (
    <>
      <Button onClick={handleDeleteAllButton} color="danger">
        Clear All
      </Button>
    </>
  );
}

export default Footer;
