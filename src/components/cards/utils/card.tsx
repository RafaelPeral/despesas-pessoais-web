import React, { ReactElement } from 'react'
import { useItem } from '@/hooks/app'
import { Card, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export const Carde: React.FC<{ content: ReactElement, index: number }> = React.memo(({ content, index }) => {
    const { deleteItem } = useItem()
    return (
        <Card>
            {content}
            <CardFooter>
                <Button onClick={() => deleteItem(index)} variant="destructive">Excluir Card</Button>
            </CardFooter>
        </Card>
    )
})
