import SectionCard from "../../components/SectionCard";
import { ContentData } from "../../contents/data";

const Destinations = () => {
  const data = {
    title: ContentData.views.destinations.title,
    description: ContentData.views.destinations.description,
  };

  return (
    <SectionCard data={data}>
      <SectionCard.Title />
      <SectionCard.Description />
    </SectionCard>
  );
};

export default Destinations;
