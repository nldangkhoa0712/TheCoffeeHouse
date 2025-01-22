import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ProductService } from "../../api/services";

interface CategoryType {
  id: number;
  categoryName: string;
  childCategory: CategoryType[];
}

interface SelectCategory {
  categoryId: string;
  handleChangeCategoryId: (...event: any[]) => void;
}

const SelectCategory = ({
  categoryId,
  handleChangeCategoryId,
}: SelectCategory) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<string>("");
  const [categoryChild, setCateGoryChild] = useState<CategoryType[]>([]);
  const { isLoading } = useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => await ProductService.getCategory(),
    enabled: true,
    onSuccess: (data: CategoryType[]) => {
      setCategories(data);
    },
    refetchOnWindowFocus: false,
  });

  const handleChangeCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string);
    const categoryChild = categories.filter(
      (item) => item.id == Number(e.target.value)
    );
    setCateGoryChild(categoryChild[0].childCategory);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p style={{ marginTop: "10px" }}>Category Name</p>
      <FormControl fullWidth>
        <Select value={category} onChange={handleChangeCategory}>
          {categories &&
            categories.map((item, index) => {
              return (
                <MenuItem key={index} value={String(item.id)}>
                  {item.categoryName}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Select value={String(categoryId)} onChange={handleChangeCategoryId}>
          {categoryChild &&
            categoryChild.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item.id}>
                  {item.categoryName}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;
