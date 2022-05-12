import React from "react";
import {BaseLayout, HStack} from "../components/Layout";
import {Pressable, Text} from "react-native";

const HomeScreen = ({navigation}) => {
	return(
		<BaseLayout>
			<HStack>
				<Text>Example AR App !!</Text>
			</HStack>

			<Pressable
				style={{
					height: 50,
					width: 50,
				}}
				onPress={ ()=> {
					console.log("ARS!!")
				} }>
				<Text>This izc!!!</Text>
			</Pressable>
		</BaseLayout>
	)
}

export default HomeScreen