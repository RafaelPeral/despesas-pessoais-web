import React, { ReactElement } from 'react'
import { useItem } from '@/hooks/app'
import { Card, CardFooter } from '@/components/ui/card'


export const Carde: React.FC<{ content: ReactElement, index: number }> = React.memo(({ content, index }) => {
    const { deleteItem } = useItem()
    return (
        <Card>
            {content}
            <CardFooter>
                <button onClick={() => deleteItem(index)}>deletar</button>
            </CardFooter>
        </Card>
    )
})
