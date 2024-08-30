import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from "../../styles/styles.ts";


type AccordionItemPros = PropsWithChildren<{
    title: string;
}>;

function AccordionItem({ children, title }: AccordionItemPros): React.JSX.Element {
    const [ expanded, setExpanded ] = useState(false);

    function toggleItem() {
        setExpanded(!expanded);
    }

    const body = <View style={styles.accordBody}>{ children }</View>;

    return (
        <View style={styles.accordContainer}>
            <TouchableOpacity style={expanded ? styles.accordHeader2 : styles.accordHeader} onPress={ toggleItem }>
                {!expanded &&
                    <Text style={styles.accordTitle}>{ title }</Text>
                }
                <Icon name={ expanded ? 'chevron-up' : 'chevron-down' }
                      size={20} color="#bbb" style={styles.expanded}/>
                { expanded && body }
            </TouchableOpacity>
        </View>
    );
}

export default AccordionItem;