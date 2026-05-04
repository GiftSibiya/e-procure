import HeaderComponent from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import CreateTenderForm from "../Components/CreateTenderForm/CreateTenderForm";

export default function TenderCreate() {
  return (
    <div className="min-h-screen bg-surface-primary flex flex-col font-body">
      <HeaderComponent />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6 overflow-auto">
          <CreateTenderForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}
