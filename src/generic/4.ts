/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Info {
  pageInfo (): void;
}

class Component<T>{
  
  constructor (public props: {title: T}) {}
}

class Page extends Component<string> implements Info {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};