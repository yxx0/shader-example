/**
 * 老化效果
 * @author yxx0
 */

const { ccclass, property, executeInEditMode, executionOrder } = cc._decorator;

@ccclass
@executeInEditMode
@executionOrder(-1)
export default class Older extends cc.Component {

    @property(cc.Node)
    transition: cc.Node = null;

    @property(cc.Node)
    oldest: cc.Node = null;

    _value: number = 0;

    onLoad(): void {
        this.makeOld(this.oldest, 1)

        // let value = 0;
        // this.schedule(() => {
        //     value += .1;
        //     this.makeOld(this.transition, value)
        //     if (value >= 1) value = 0;
        // }, .5)
    }

    /**
     * 老化效果
     * @param target 节点
     * @param value 老化效果范围 [0 - 1]
     */
    makeOld(target: cc.Node, value: number): void {
        let sprite = target.getComponent(cc.Sprite);
        sprite.getMaterial(0).setProperty('progress', value);
    }

    update(dt) {
        this._value += dt;
        this.makeOld(this.transition, this._value)
        if (this._value >= 1) this._value = 0;
    }
}
