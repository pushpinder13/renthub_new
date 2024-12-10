const Vendor = require('../models/vendorModel');

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching vendors' });
  }
};

// Approve vendor
exports.approveVendor = async (req, res) => {
  try {
    const vendorId = req.params.id;
    const updatedVendor = await Vendor.findByIdAndUpdate(vendorId, { approved: true }, { new: true });
    res.status(200).json({ message: 'Vendor approved', updatedVendor });
  } catch (error) {
    res.status(500).json({ error: 'Error approving vendor' });
  }
};
