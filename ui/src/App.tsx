import './App.css'
import { Button, Card, Container, Flex, Heading, Text, TextField, Theme } from '@radix-ui/themes'
import houseImg from "../public/house.jpg"
import { Armchair, Droplet, House, LandPlot, } from 'lucide-react'
import PropertyCard from './components/PropertyCard'

function App() {

	return (

		<Flex direction="column">
			<Flex direction="row" gap="4" justify="between" align="center" p="4">
				<Flex direction="row" gap="2">
					<House />
					<Heading>YOUR HOME IS THERE</Heading>
				</Flex>
				<Flex direction="row" gap="4">
					<Text>Buy</Text>
					<Text>Rent</Text>
					<Text>Sell</Text>
					<Text>Rent out</Text>
				</Flex>
				<Flex direction="row" gap="4">
					<TextField.Root
						placeholder='Search'
						autoFocus
					/>
					<Text>Log in</Text>
					<Text>En</Text>
				</Flex>
			</Flex>


			<Flex direction="row" gap="9" p="4">
				<p>PROPERTY TYPE</p>


				<Theme appearance='light'>
					<Card >
						<Flex direction="row" gap="4">

							<Flex direction="column" gap="4" align="start">
								<Heading>Search results</Heading>
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
							</Flex>

							<Card>
								<img
									alt='House'
									src={houseImg}
									style={{
										width: "500px",
										borderRadius: "8px",
									}} />
							</Card>

						</Flex>
					</Card>

				</Theme>
			</Flex>
		</Flex >

	)
}

export default App
