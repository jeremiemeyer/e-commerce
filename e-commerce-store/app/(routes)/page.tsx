import getBillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProducts from "@/actions/get-products"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("22abce73-4416-4251-9738-1a4b82add1c8")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
