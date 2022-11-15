import React from 'react'
import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function SelectColors() {
    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <ColorConsumer>
                {
                    ({ actions }) => (
                        <div style={{ display: 'flex' }}>
                            {colors.map(color => (
                                <div
                                    key={color}
                                    style={{
                                        background: color,
                                        width: '24px',
                                        height: '24px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => actions.setColor(color)}
                                    onContextMenu={e => {
                                        e.preventDefault();     // 마우스 오른쪽 클릭시 메뉴가 뜨는 것 무시
                                        actions.setSubcolor(color);
                                    }}
                                />
                            ))}
                        </div>
                    )
                }


            </ColorConsumer>
            <hr />
        </div>
    )
}

export default SelectColors