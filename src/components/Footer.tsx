import { Container } from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 text-sm text-gray-500">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-gray-700">Workbridge</p>
          <p className="text-gray-500">© {new Date().getFullYear()} Workbridge Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
