import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Armchair, Droplet, LandPlot } from "lucide-react";
import houseImg from "../../public/house.jpg"

const PropertyCard = () => {
    return (
        <Card>
            <Flex direction="row" gap="4" p="2">
                <img
                    alt='House'
                    src={houseImg}
                    style={{
                        width: "350px",
                        borderRadius: "8px",
                    }}
                />
                <Flex direction="column" gap="2" justify="between">
                    <Flex direction="column" gap="2">
                        <Text>4300 E 50TH ST, VALLEY VIEW</Text>
                        <Heading>Seaside Serenity Villa</Heading>
                        <Text>Wake up to the soothing melody of waves. This beachfront villa offers...</Text>
                    </Flex>
                    <Flex direction="column" gap="2">
                        <Flex direction="row" gap="6">
                            <Flex direction="row" gap="2">
                                <Armchair />
                                <Text>3</Text>
                            </Flex>
                            <Flex direction="row" gap="2">
                                <Droplet />
                                <Text>2</Text>
                            </Flex>
                            <Flex direction="row" gap="2">
                                <LandPlot />
                                <Text>2,500</Text>
                            </Flex>
                        </Flex>

                        <Flex direction="row" justify="between" align="end">
                            <Flex direction="column">
                                <Text>PRICE</Text>
                                <Text size="4" weight="bold">$1,250,000</Text>
                            </Flex>
                            <Button>ADD TO FAVORITES</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
}

export default PropertyCard;