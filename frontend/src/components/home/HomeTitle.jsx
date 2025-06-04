import { Row } from "react-bootstrap";

const HomeTitle = ({ title }) => {
  return (
    <Row>
      <div className="home-title">
        {title}
        <div className="title-line">yupar</div>
      </div>
    </Row>
  );
};

export default HomeTitle;
