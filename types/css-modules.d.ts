declare module "*.scss" {
    interface ClassList {
      [className: string]: string;
    }
    const classNames: ClassList;
    export = classNames;
  }
  