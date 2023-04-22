class Component {
  constructor(props) {
    this.props = props;
  }
}

const component = new Component({ name: "부모", age: 30 });
console.log(component.props);

class TestComponent extends Component {
  constructor(props, enable) {
    super(props);
    this.enable = enable;
  }

  render() {
    return `Hello, ${this.props}`;
  }
}

const testComponent = new TestComponent({ name: "상속", age: 10 });

console.log(testComponent.props);
