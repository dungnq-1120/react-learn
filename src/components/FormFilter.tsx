import { Col, Input, Row } from "antd";
import { useEffect, useState } from "react";
import useDebouncedEffects from "../hooks/useDebouncedEffects";

export default function FormFilter({ getProduct }: any) {
  const [valueSearch, setValueSearch] = useState<string>("");
  const stateDebounce = useDebouncedEffects(valueSearch, 3000);

  useEffect(() => {
    console.log(stateDebounce);
  }, [stateDebounce]);

  // console.log("render");
  
  return (
    <div>
      <Row>
        <Col>
          <Input
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
          />
        </Col>
      </Row>
    </div>
  );
}
