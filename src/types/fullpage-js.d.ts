declare module "fullpage.js" {
  export type FullPageSectionInfo = {
    anchor?: string;
    index?: number;
  };

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
    fixedElements?: string;
    responsiveWidth?: number;
    responsiveHeight?: number;
    afterLoad?: (
      origin: FullPageSectionInfo | null,
      destination: FullPageSectionInfo,
      direction: string,
      trigger?: string,
    ) => void;
    onLeave?: (
      origin: FullPageSectionInfo,
      destination: FullPageSectionInfo,
      direction: string,
      trigger?: string,
    ) => void;
  };

  export type FullPageInstance = {
    destroy: (type?: "all") => void;
  };

  const FullPage: new (selector: string, options?: FullPageOptions) => FullPageInstance;

  export default FullPage;
}
