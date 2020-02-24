import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import merge from 'lodash/merge';
import { Button } from '@wld/ui';

import DeveloperProfile from './package';
import JsonStub from './data/json_stub.json';

function App() {
    const [data, setData] = useState(JsonStub);

    const onEdit = useCallback(
        newData => {
            setData(merge({}, data, newData));
        },
        [data]
    );
    const [customization, setCustomization] = useState({
        cardsOrder: [
            { type: 'basics', variant: 0 },
            { type: 'projects', variant: 1 },
            { type: 'language', variant: 2 },
            { type: 'dreamjob', variant: 4 },
            { type: 'gifs', variant: 5 },
            { type: 'experiences', variant: 4 },
            { type: 'studies', variant: 3 },
            { type: 'skills', variant: 0 },
            { type: 'soundtrack', variant: 0 },
            { type: 'interestedBy', variant: 2 }
        ]
    });

    const onCustomizationChanged = useCallback(
        newCustomization => {
            setCustomization(merge({}, customization, newCustomization));
        },
        [data]
    );
    return (
        <DeveloperProfile
            isEditing
            mode="edit"
            data={data}
            onEdit={onEdit}
            onCustomizationChanged={onCustomizationChanged}
            options={{
                // flipped,
                apiKeys: { giphy: process.env.REACT_APP_GIPHY_API_KEY },
                endpoints: {
                    devicons:
                        'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2'
                },
                customization
            }}
            ActionButtons={
                <Button style={{ color: '#fff' }} variant="outlined">
                    <FormattedMessage id="App.main." defaultMessage="See more" />
                </Button>
            }
        />
    );
}

export default App;