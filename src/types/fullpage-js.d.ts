declare module "fullpage.js" {
  export type FullPageOptions = {
    licenseKey?: string;
    autoScrolling?: boolean;
    scrollHorizontally?: boolean;
    navigation?: boolean;
    navigationPosition?: string;
    showActiveTooltip?: boolean;
    slidesNavigation?: boolean;
    slidesNavPosition?: string;
    controlArrows?: boolean;
    verticalCentered?: boolean;
    sectionsColor?: string[];
    anchors?: string[];
    menu?: string;
    responsiveWidth?: number;
    responsiveHeight?: number;
  };

  export type FullPageInstance = {
    destroy: (type?: "all") => void;
  };

  const FullPage: new (selector: string, options?: FullPageOptions) => FullPageInstance;

  export default FullPage;
}
