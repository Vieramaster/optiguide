import { MONOFOCAL_TECNI_OPTICA } from "@/features/tools/lens-catalog/data/company-tecni-optica/monofocal-tecni-optica"
import { Table, TableHead, TableBody, TableHeader, TableRow } from "@/components/ui"
import type { LucideProps } from "lucide-react"
import { Sparkles, MonitorSmartphone, DropletOff, Shield, ZapOff, Sun } from "lucide-react"
type Objet = {
  title: string,
  key: string,
  Ico?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}
export const lala: Objet[] = [
  { title: "nombre del cristal", key: "name" },
  { title: "tipo", key: "type" },
  { title: "rango de dioptrias", key: "rangeDiopters" },
  { title: "rango", key: "range" },
  { title: "indice", key: "index" },
  { title: "diam", key: "diam" },
  { title: "tallado", key: "lensType" },
  { title: "forma", key: "surfacing" },
  { title: "antireflejo", Ico: Sparkles, key: "antireflex" },
  { title: "filtro de pantalla", Ico: MonitorSmartphone, key: "blueControl" },
  { title: "oleofobico e hidrofobico", Ico: DropletOff, key: "oleophobicHydrophobic" },
  { title: "proteccion contra rayas", Ico: Shield, key: "scratchResistant" },
  { title: "anti estatica", Ico: ZapOff, key: "antiStatic" },
  { title: "fotocromatico", Ico: Sun, key: "photocromatic" },
  { title: "colores ", key: "colors" },

]


const Catalogo = () =>

  <section className="overflow-x-auto">
    <Table className="min-w-full ">
      <TableHeader>
        <TableRow>
          {
            lala.map(({ title, Ico, key }) =>
              <TableHead key={key} title={title}>
                {Ico ? <Ico className="w-90%" /> : title}
              </TableHead>

            )
          }
        </TableRow>
      </TableHeader>
    </Table>
  </section>

export default Catalogo 