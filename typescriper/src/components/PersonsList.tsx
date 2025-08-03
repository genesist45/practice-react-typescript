import type { Name } from './Person.type'
// Nag-import ta og type nga "Name" gikan sa Person.type file.
// Ang "type" keyword kay nagpasabot nga type-only import ra ni — dili ni moapil sa output JS code.

interface PeopleProps {
    value: Name[];
}
// Gihimo nato ang interface nga "PeopleProps" nga naay property nga "value".
// Ang "value" is array of "Name" type — mao ni atong gi-import sa taas.

function PersonList(props: PeopleProps) {
    // Sa function parameter, atong gi-declare nga ang "props" kay type nga "PeopleProps".

    const people = props.value;
    // Gisave nato ang props.value sa variable nga "people" para sayon gamiton sa ubos.

    return (
        <>
            <div>
                {people.map((person, index) => {
                    return (
                        <div key={index}>
                            <p>{`Name: ${person.name}, Age: ${person.age}`}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default PersonList;
