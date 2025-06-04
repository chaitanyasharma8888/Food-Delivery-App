import RestaurantCard,{withFastDelivery} from "../components/RestaurantCard";
import resCardMock  from "../mocks/resCardMock.json";
import { screen ,render} from "@testing-library/react";
import "@testing-library/jest-dom";

test("should render restaurant card data with props", () => {
 render(<RestaurantCard restprop={{ info: resCardMock }} />);

  const name=screen.getByText("Pastas By Pizza Hut");
  expect(name).toBeInTheDocument();

});

  const RestaurantCardWithFastDelivery = withFastDelivery(RestaurantCard);
  
  test('should render the Fast Delivery label', () => {
    render(
      <RestaurantCardWithFastDelivery 
        restprop={{ info: resCardMock }} 
      />
    );
    
    // Verify the Fast Delivery label exists
    expect(screen.getByText('FastDelivery⏫')).toBeInTheDocument();

});
 
 