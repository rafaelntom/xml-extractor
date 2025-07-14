import { useFileProcessing } from "../hooks/useFileProcessing";

const CustomInput = () => {
  const { file, setFile } = useFileProcessing();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input type="file" className="file-input" accept=".xml" onChange={handleChange} />
      {file && <p>Arquivo selecionado: {file.name}</p>}

      {file && <button className="btn btn-success">Processar XML</button>}
    </div>
  );
};

export default CustomInput;
