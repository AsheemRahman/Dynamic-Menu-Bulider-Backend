import Menu from '../model/menu.js';


export const DisplayMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const AddMenu = async (req, res) => {
    const menu = new Menu({
        name: req.body.name,
        description: req.body.description,
        items: req.body.items || [],
    });
    try {
        const newMenu = await menu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const Items = async (req, res) => {
    try {
        const menus = await Menu.findById(req.params.id);
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const Additems = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        menu.items.push(req.body);
        const updatedMenu = await menu.save();
        res.status(201).json(updatedMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
