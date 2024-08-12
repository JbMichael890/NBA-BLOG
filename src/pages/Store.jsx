import StorePageEight from "../component/Store/StorePageEight";
import StorePageFive from "../component/Store/StorePageFive";
import StorePageFour from "../component/Store/StorePageFour";
import StorePageNine from "../component/Store/StorePageNine";
import StorePageOne from "../component/Store/StorePageOne";
import StorePageSeven from "../component/Store/StorePageSeven";
import StorePageSix from "../component/Store/StorePageSix";
import StorePageTen from "../component/Store/StorePageTen";
import StorePageThree from "../component/Store/StorePageThree";
import StorePageTwo from "../component/Store/StorePageTwo";

const Store = () => {
  return (
    <div>
      <StorePageOne />
      <StorePageTwo />
      <StorePageTen/>
      {/* <StorePageThree/> */}
    <StorePageFour/>
  
    <StorePageSix/>
    <StorePageNine/>
    <StorePageSeven/>
    <StorePageFive/>
    <StorePageEight/> 
 
    </div>
  );
};

export default Store;
