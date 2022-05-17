import { render } from "@testing-library/react";
import { createMemoryHistory } from "history"

describe('<Login />', () => {
  it('로그인 컴포넌트 테스트', () => {
    const history = createMemoryHistory();
    history.push('/login');

    // render(
    //   <Router location={history.location} navigator={history}>
    //     <
    //   </Router>
    // )
  })
})