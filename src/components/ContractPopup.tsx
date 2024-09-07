import { Button, Input, Modal } from "antd";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContract } from "../providers/ContractProvider.tsx";

interface ContractPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContractPopup: FC<ContractPopupProps> = ({ open, setOpen }) => {
  const [name, setName] = useState<string>();
  const [deductible, setDeductible] = useState<number>();
  const [premium, setPremium] = useState<number>();
  const { contracts, addContract } = useContract();

  const handleSubmit = (): void => {
    if (deductible && premium) {
      if (!contracts.some((f) => f.name === name)) {
        addContract(
          name ?? `Franchise ${contracts.length + 1}`,
          deductible,
          premium * 12,
        );

        setName(undefined);
        setDeductible(undefined);
        setPremium(undefined);

        setOpen(false);
      } else {
        toast.error("Un autre contrat porte déjà ce nom");
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
          value={deductible}
          onChange={(e) => setDeductible(e.target.valueAsNumber)}
        />
        <Input
          placeholder="Prime mensuelle"
          type="number"
          value={premium}
          onChange={(e) => setPremium(e.target.valueAsNumber)}
        />
      </form>
    </Modal>
  );
};

export default ContractPopup;
