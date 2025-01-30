import React, { useState } from "react";
import { X } from "react-feather";
import { StyledFilterModal } from "./filter-styles";
import ButtonField from "../Button Field/ButtonField";
import { CategoryButton, CategoryButtonSort } from "../Category Button/CategoryButton";

const FilterModal: React.FC<{ 
  isModalOpen: boolean; 
  onClose: () => void;
  onApplyFilters: (filters: { sort: string[]; categories: string[] }) => void; 
}> = ({ isModalOpen, onClose, onApplyFilters }) => {

  const [selectedSortFilters, setSelectedSortFilters] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSortButtonClick = (text: string) => {
    setSelectedSortFilters((prevFilters) => {
      let updatedFilters = [...prevFilters];
  
      //se newest for selecionado remove oldest
      if (text === "Newest") {
        updatedFilters = updatedFilters.filter((filter) => filter !== "Oldest");
      } else if (text === "Oldest") {
        updatedFilters = updatedFilters.filter((filter) => filter !== "Newest");
      }

      //se low price for selecionado remove high price
      if (text === "High Price") {
        updatedFilters = updatedFilters.filter((filter) => filter !== "Low Price");
      } else if (text === "Low Price") {
        updatedFilters = updatedFilters.filter((filter) => filter !== "High Price");
      }
  
      return updatedFilters.includes(text)
        ? updatedFilters.filter((filter) => filter !== text) //remove se já estiver selecionado
        : [...updatedFilters, text]; //adiciona se não estiver selecionado
    });
  };
  

  const handleCategoryButtonClick = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const applyFilters = () => {
    const appliedFilters = {
      sort: selectedSortFilters,
      categories: selectedCategories,
    };
    console.log(appliedFilters);
    onApplyFilters(appliedFilters);
  };
  

  if (!isModalOpen) return null;

  return (
    <>
      <StyledFilterModal.Overlay />
      <StyledFilterModal.Container>
        <StyledFilterModal.Header>
          <StyledFilterModal.Title>Filter</StyledFilterModal.Title>
          <X size={20} onClick={onClose} />
        </StyledFilterModal.Header>

        <StyledFilterModal.Content>
          <StyledFilterModal.Section>
            <h4>Category</h4>
            <StyledFilterModal.ButtonGroup>
              {["headphones", "headsets"].map((category) => (
                <CategoryButton
                  key={category}
                  text={category.charAt(0).toUpperCase() + category.slice(1, -1)} //primeira letra maiúscula e sem o "s" final
                  onClick={() => handleCategoryButtonClick(category)}
                  isSelected={selectedCategories.includes(category)}
                />
              ))}
            </StyledFilterModal.ButtonGroup>
          </StyledFilterModal.Section>

          <StyledFilterModal.Section>
            <h4>Sort By</h4>
            <StyledFilterModal.ButtonGroup>
              {["Popularity", "Newest", "Oldest", "High Price", "Low Price"].map((filter) => (
                <CategoryButtonSort
                  key={filter}
                  text={filter}
                  onClick={() => handleSortButtonClick(filter)}
                  isSelected={selectedSortFilters.includes(filter)}
                />
              ))}
            </StyledFilterModal.ButtonGroup>
          </StyledFilterModal.Section>
        </StyledFilterModal.Content>

        <ButtonField typeButton="submit" text="Apply Filter" onClick={applyFilters} />
      </StyledFilterModal.Container>
    </>
  );
};

export default FilterModal;
