import React from 'react';
import { Fieldset } from 'primereact/fieldset';

export default function BasicDemo() {
    return (
        <div className="card">
            <Fieldset legend="Objetivo">
                <p className="m-0">
                    retirar do documento do projeto
                </p>
            </Fieldset>
            <div className="card mt-2">
                <Fieldset legend="Publico alvo">
                    <p className="m-0">
                        retirar do documento do projeto
                    </p>
                </Fieldset>
            </div>
        </div>

    )
}
      