import React, { useState } from "react";
import { X } from "react-feather";
import { StyledFilterModal } from "../styles/components/filter-styles";
import ButtonField from "./ButtonField";
import { CategoryButton, CategoryButtonSort } from "./CategoryButton";

const FilterModal: React.FC<{ isModalOpen: boolean; onClose: () => void }> = ({
  isModalOpen,
  onClose,
}) => {
  const [selectedSortFilters, setSelectedSortFilters] = useState<string[]>([]);

  const handleSortButtonClick = (text: string) => {
    setSelectedSortFilters((prevFilters) =>
      prevFilters.includes(text)
        ? prevFilters.filter((filter) => filter !== text) // Remove se já estiver na lista
        : [...prevFilters, text] // Adiciona à lista
    );
  };

  const applyFilters = () => {
    console.log("Filtros aplicados:", selectedSortFilters);
    // Aqui você pode enviar os filtros selecionados para o componente pai ou realizar a pesquisa.
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
              <CategoryButton text="Headset" />
              <CategoryButton text="Headset" />
            </StyledFilterModal.ButtonGroup>
          </StyledFilterModal.Section>

          <StyledFilterModal.Section>
            <h4>Sort By</h4>
            <StyledFilterModal.ButtonGroup>
              <CategoryButtonSort
                text="Popularity"
                onClick={() => handleSortButtonClick("Popularity")}
              />
              <CategoryButtonSort
                text="Newest"
                onClick={() => handleSortButtonClick("Newest")}
              />
              <CategoryButtonSort
                text="Oldest"
                onClick={() => handleSortButtonClick("Oldest")}
              />
              <CategoryButtonSort
                text="High Price"
                onClick={() => handleSortButtonClick("High Price")}
              />
              <CategoryButtonSort
                text="Low Price"
                onClick={() => handleSortButtonClick("Low Price")}
              />
            </StyledFilterModal.ButtonGroup>
          </StyledFilterModal.Section>
        </StyledFilterModal.Content>

        <ButtonField typeButton="submit" text="Apply Filter" onClick={applyFilters} />
      </StyledFilterModal.Container>
    </>
  );
};

export default FilterModal;
