import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function () {
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{CORE_CONCEPTS.map((conceptsItem) => (
					<CoreConcept key={conceptsItem.title} {...conceptsItem} />
				))}
			</ul>
		</Section>
	);
}
