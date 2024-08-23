import { Button, Input, Modal } from "antd";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFranchise } from "../providers/FranchiseProvider";

interface FranchisePopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const FranchisePopup: FC<FranchisePopupProps> = ({ open, setOpen }) => {
  const [name, setName] = useState<string>();
  const [franchise, setFranchise] = useState<number>();
  const [insurancePremium, setInsurancePremium] = useState<number>();
  const { franchises, addFranchise } = useFranchise();

  const handleSubmit = (): void => {
    if (franchise && insurancePremium) {
      if (!franchises.some((f) => f.name === name)) {
        addFranchise(
          name ?? `Franchise ${franchises.length + 1}`,
          franchise,
          insurancePremium * 12,
        );

        setName(undefined);
        setFranchise(undefined);
        setInsurancePremium(undefined);

        setOpen(false);
      } else {
        toast.error("Une autre franchise a déjà ce nom");
      }
    }
  };

  return (
    <Modal
      title="Ajouter une franchise"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
      footer={
        <>
          <Button onClick={() => setOpen(false)}>
            Annuler <X />
          </Button>
          <Button onClick={handleSubmit} type="primary">
            Ajouter <Plus />
          </Button>
        </>
      }
    >
      <form>
        <Input
          placeholder="Nom"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Franchise"
          type="number"
          value={franchise}
          onChange={(e) => setFranchise(e.target.valueAsNumber)}
        />
        <Input
          placeholder="Prime mensuelle"
          type="number"
          value={insurancePremium}
          onChange={(e) => setInsurancePremium(e.target.valueAsNumber)}
        />
      </form>
    </Modal>
  );
};

export default FranchisePopup;
